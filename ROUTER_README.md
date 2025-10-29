# 🚀 Simple Client-Side Router - Complete Guide

## 📚 Table of Contents
1. [What is a Router?](#what-is-a-router)
2. [Why Do We Need a Router?](#why-do-we-need-a-router)
3. [How Our Router Works](#how-our-router-works)
4. [Step-by-Step Code Explanation](#step-by-step-code-explanation)
5. [Usage Examples](#usage-examples)
6. [Common Patterns](#common-patterns)
7. [Key Concepts to Understand](#key-concepts-to-understand)

---

## 🤔 What is a Router?

A **router** is like a traffic controller for your website. It decides **what content to show** based on the **URL** in the browser's address bar.

### Real-World Analogy
Imagine you're in a library:
- You ask for a book by its catalog number (URL path)
- The librarian (router) finds the right book (component)
- You get the book without leaving your seat (no page reload)

### Traditional Websites vs Single Page Apps (SPAs)

**Traditional Website:**
```
User clicks link → Browser requests new page from server → 
Server sends entire HTML → Browser reloads → Shows new page
```
❌ Slow (full page reload)
❌ Flickering white screen
❌ Loses JavaScript state

**Single Page App with Router:**
```
User clicks link → Router intercepts → 
Changes content with JavaScript → Shows new page
```
✅ Fast (no reload)
✅ Smooth transitions
✅ Keeps JavaScript state

---

## 🎯 Why Do We Need a Router?

### Problem Without a Router
```javascript
// BAD: Manual content switching
document.getElementById('home-btn').onclick = () => {
  document.body.innerHTML = '<h1>Home</h1>';
};

document.getElementById('about-btn').onclick = () => {
  document.body.innerHTML = '<h1>About</h1>';
};
```

**Issues:**
- ❌ URL doesn't change (can't bookmark or share)
- ❌ Browser back/forward buttons don't work
- ❌ No way to deep-link to specific pages
- ❌ Code becomes messy with many pages

### Solution With a Router
```javascript
// GOOD: Router handles everything
router.addRoute('/', HomePage);
router.addRoute('/about', AboutPage);
router.start();
```

**Benefits:**
- ✅ URL changes automatically
- ✅ Back/forward buttons work
- ✅ Can bookmark any page
- ✅ Clean, organized code

---

## 🔧 How Our Router Works

### The Big Picture

```
┌─────────────────────────────────────────────────────────────┐
│                         BROWSER                             │
├─────────────────────────────────────────────────────────────┤
│  Address Bar: https://example.com/about                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────┐       │
│  │         <div id="app">                          │       │
│  │           [Router renders content here]         │       │
│  │         </div>                                  │       │
│  └─────────────────────────────────────────────────┘       │
│                                                             │
│  Links: <a href="/">Home</a> <a href="/about">About</a>    │
│         ↑ Router intercepts these clicks                   │
└─────────────────────────────────────────────────────────────┘

                              ↓
                              
┌─────────────────────────────────────────────────────────────┐
│                    ROUTER (JavaScript)                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Routes Map:                                                │
│  ┌──────────────────────────────────────┐                  │
│  │  "/"       →  HomePage()             │                  │
│  │  "/about"  →  AboutPage()            │                  │
│  │  "/contact"→  ContactPage()          │                  │
│  └──────────────────────────────────────┘                  │
│                                                             │
│  Current Path: "/about"                                     │
│  Action: Render AboutPage() in #app                         │
└─────────────────────────────────────────────────────────────┘
```

### Key Technologies Used

#### 1. **History API** (`window.history`)
The History API lets us change the URL without reloading the page.

```javascript
// Changes URL from "/" to "/about" WITHOUT reloading
window.history.pushState({}, '', '/about');
```

**Key Methods:**
- `pushState()` - Add new URL to history (like clicking a link)
- `replaceState()` - Change current URL without adding to history
- `popstate` event - Fires when user clicks back/forward

#### 2. **Event Delegation**
We listen for ALL clicks on the document, then check if it was a link.

```javascript
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');
  if (anchor) {
    // Handle the link click
  }
});
```

**Why?**
- Works for links added dynamically
- Only one event listener (efficient)

#### 3. **Map Data Structure**
We use `Map` to store routes because it's fast for lookups.

```javascript
const routes = new Map();
routes.set('/about', AboutPage);

// Later: Fast lookup
const component = routes.get('/about'); // Returns AboutPage
```

---

## 📖 Step-by-Step Code Explanation

Let's break down each part of the router:

### Part 1: Class Properties

```typescript
export class Router {
  private routes: Map<string, () => HTMLElement> = new Map();
  private container: HTMLElement;
  private notFoundComponent: () => HTMLElement = () => {
    const el = document.createElement('div');
    el.innerHTML = '<h1>404 - Page Not Found</h1>';
    return el;
  };
```

**What's happening:**
- `routes`: A Map that stores path → component pairs
  - Key: `"/about"` (string)
  - Value: `AboutPage` (function that returns HTMLElement)
- `container`: The div where we'll put our pages (like `<div id="app">`)
- `notFoundComponent`: Default 404 page (can be customized)

**Why Map instead of Object?**
```javascript
// Object approach (old way)
const routes = {
  '/about': AboutPage,
  '/contact': ContactPage
};

// Map approach (better)
const routes = new Map([
  ['/about', AboutPage],
  ['/contact', ContactPage]
]);

// Map is better because:
// - Faster lookups
// - Keys can be any type (not just strings)
// - Built-in size property
// - Easier to iterate
```

---

### Part 2: Constructor

```typescript
constructor(containerId: string) {
  const el = document.getElementById(containerId);
  
  if (!el) {
    throw new Error(
      `Router Error: Could not find element with id="${containerId}".`
    );
  }
  
  this.container = el;
  
  window.addEventListener('popstate', () => {
    this.loadPage(window.location.pathname);
  });
}
```

**What's happening:**
1. **Find the container** - Look for the element by ID (e.g., `<div id="app">`)
2. **Safety check** - If not found, throw a clear error
3. **Save reference** - Store the element in `this.container`
4. **Listen for back/forward** - When user clicks browser back/forward, load the right page

**Why the error check?**
```javascript
// WITHOUT check (old code)
this.container = document.getElementById(containerId)!;
// If element doesn't exist, you get a confusing error later:
// "Cannot read property 'innerHTML' of null"

// WITH check (new code)
if (!el) throw new Error("Clear, helpful error message");
// You immediately know what's wrong and how to fix it
```

**What is `popstate`?**
```javascript
// User journey:
// 1. User is on /home
// 2. Clicks link to /about  (URL: /about)
// 3. Clicks link to /contact (URL: /contact)
// 4. Clicks browser BACK button (URL changes to /about)
//    ↑ This fires the 'popstate' event!

window.addEventListener('popstate', () => {
  // "The URL just changed to /about, let me load that page"
  this.loadPage(window.location.pathname);
});
```

---

### Part 3: Adding Routes

```typescript
addRoute(path: string, component: () => HTMLElement) {
  const normalizedPath = this.normalizePath(path);
  this.routes.set(normalizedPath, component);
}
```

**What's happening:**
1. **Normalize the path** - Make sure paths are consistent
   - `"about"` → `"/about"`
   - `"/about/"` → `"/about"`
2. **Store in Map** - Save the path → component mapping

**Example usage:**
```javascript
// Define a component (function that returns HTML)
function HomePage() {
  const div = document.createElement('div');
  div.innerHTML = '<h1>Welcome Home!</h1>';
  return div;
}

// Register it with a path
router.addRoute('/', HomePage);
```

---

### Part 4: Setting Custom 404

```typescript
setNotFound(component: () => HTMLElement) {
  this.notFoundComponent = component;
}
```

**What's happening:**
- Replace the default 404 page with your own

**Example usage:**
```javascript
router.setNotFound(() => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Oops! Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go Home</a>
  `;
  return div;
});
```

---

### Part 5: Navigation

```typescript
navigate(path: string) {
  const normalizedPath = this.normalizePath(path);
  window.history.pushState({}, '', normalizedPath);
  this.loadPage(normalizedPath);
}
```

**What's happening:**
1. **Normalize path** - Ensure consistency
2. **Update URL** - Change the address bar (without reload!)
3. **Load page** - Render the component

**When is this called?**
```javascript
// 1. User clicks a link (intercepted by router)
<a href="/about">About</a> // Click → router.navigate('/about')

// 2. Programmatically in your code
button.onclick = () => router.navigate('/profile');
```

**What does `pushState` do?**
```javascript
// Before: URL is "example.com/"
window.history.pushState({}, '', '/about');
// After: URL is "example.com/about"

// The magic:
// - URL changed
// - Page didn't reload
// - Browser history updated (back button works)
// - No request sent to server
```

---

### Part 6: Loading a Page

```typescript
private loadPage(path: string) {
  const normalizedPath = this.normalizePath(path);
  const component = this.routes.get(normalizedPath);
  
  this.container.innerHTML = '';
  
  if (component) {
    this.container.append(component());
  } else {
    this.container.append(this.notFoundComponent());
  }
}
```

**What's happening:**
1. **Normalize path** - Ensure we match how it was stored
2. **Look up component** - Check if we have a route for this path
3. **Clear container** - Remove old content
4. **Render new content** - Add the component OR 404 page

**Visual flow:**
```javascript
// Current state:
<div id="app">
  <h1>Home Page</h1>  ← Old content
</div>

// User navigates to /about
loadPage('/about')

// Step 1: Clear
<div id="app">
</div>

// Step 2: Append new component
<div id="app">
  <h1>About Page</h1>  ← New content
</div>
```

---

### Part 7: Starting the Router

```typescript
start() {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a') as HTMLAnchorElement | null;
    
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    
    if (
      !href ||
      anchor.target ||
      anchor.hasAttribute('download') ||
      anchor.getAttribute('rel') === 'external' ||
      href.startsWith('http') ||
      href.startsWith('https') ||
      href.startsWith('mailto:') ||
      href.startsWith('#')
    ) {
      return;
    }
    
    e.preventDefault();
    this.navigate(href);
  });

  this.loadPage(window.location.pathname);
}
```

**What's happening:**
1. **Set up link interception** - Catch all clicks
2. **Filter links** - Only intercept internal links
3. **Load initial page** - Show the page for current URL

**Link Interception Deep Dive:**

```javascript
// Step 1: Listen for ALL clicks
document.addEventListener('click', (e) => {
  
  // Step 2: Find if we clicked an <a> tag (or inside one)
  const anchor = target.closest('a');
  // closest() looks up the DOM tree
  // Example: <a><span>Click</span></a>
  //          User clicks <span> → closest finds the <a>
  
  // Step 3: Ignore if not a link
  if (!anchor) return;
  
  // Step 4: Get the href
  const href = anchor.getAttribute('href');
  
  // Step 5: Should we intercept this link?
  // Let these work normally:
  if (
    !href ||                           // No href
    anchor.target ||                   // Opens in new tab
    anchor.hasAttribute('download') || // Download link
    href.startsWith('http') ||         // External site
    href.startsWith('mailto:') ||      // Email link
    href.startsWith('#')               // Hash link (same page)
  ) {
    return; // Let browser handle it normally
  }
  
  // Step 6: This is an internal SPA link!
  e.preventDefault(); // Don't reload the page
  this.navigate(href); // Use our router instead
});
```

**Examples:**
```html
<!-- Intercepted (router navigation) -->
<a href="/">Home</a>
<a href="/about">About</a>

<!-- NOT intercepted (normal browser behavior) -->
<a href="https://google.com">Google</a>     <!-- External -->
<a href="mailto:me@example.com">Email</a>   <!-- Email -->
<a href="#section">Jump</a>                 <!-- Hash -->
<a href="/file.pdf" download>Download</a>   <!-- Download -->
<a href="/page" target="_blank">New Tab</a> <!-- New tab -->
```

---

### Part 8: Path Normalization

```typescript
private normalizePath(path: string): string {
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  
  return path;
}
```

**What's happening:**
1. **Add leading slash** - `"about"` → `"/about"`
2. **Remove trailing slash** - `"/about/"` → `"/about"`
3. **Except for root** - `"/"` stays as `"/"`

**Why is this important?**
```javascript
// WITHOUT normalization:
router.addRoute('/about', AboutPage);
router.navigate('about');   // Doesn't match! (no leading /)
router.navigate('/about/'); // Doesn't match! (trailing /)

// WITH normalization:
router.addRoute('/about', AboutPage);    // Stored as "/about"
router.navigate('about');   // Normalized to "/about" ✓
router.navigate('/about/'); // Normalized to "/about" ✓
router.navigate('/about');  // Already "/about" ✓
```

---

## 🎨 Usage Examples

### Basic Setup

```javascript
import { Router } from './router';

// 1. Create router (targets <div id="app">)
const router = new Router('app');

// 2. Create page components
function HomePage() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Home Page</h1>
    <nav>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  `;
  return div;
}

function AboutPage() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>About Us</h1>
    <p>We are a company that does things.</p>
    <a href="/">Back to Home</a>
  `;
  return div;
}

function ContactPage() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Contact Us</h1>
    <form>
      <input type="email" placeholder="Your email">
      <button>Send</button>
    </form>
    <a href="/">Back to Home</a>
  `;
  return div;
}

// 3. Register routes
router.addRoute('/', HomePage);
router.addRoute('/about', AboutPage);
router.addRoute('/contact', ContactPage);

// 4. Optional: Custom 404
router.setNotFound(() => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>404 - Not Found</h1>
    <p>This page doesn't exist!</p>
    <a href="/">Go Home</a>
  `;
  return div;
});

// 5. Start the router!
router.start();
```

### Programmatic Navigation

```javascript
// In a button click handler
document.getElementById('login-btn').onclick = () => {
  // Do login logic...
  if (success) {
    router.navigate('/dashboard');
  }
};

// After form submission
form.onsubmit = async (e) => {
  e.preventDefault();
  await saveData();
  router.navigate('/success');
};

// Conditional navigation
if (user.isAdmin) {
  router.navigate('/admin');
} else {
  router.navigate('/user');
}
```

### Component with State

```javascript
function CounterPage() {
  const div = document.createElement('div');
  let count = 0;
  
  const button = document.createElement('button');
  const display = document.createElement('p');
  
  function update() {
    display.textContent = `Count: ${count}`;
  }
  
  button.textContent = 'Increment';
  button.onclick = () => {
    count++;
    update();
  };
  
  div.append(display, button);
  update();
  
  return div;
}

router.addRoute('/counter', CounterPage);
```

---

## 🎓 Common Patterns

### Pattern 1: Shared Layout

```javascript
function createLayout(content) {
  const div = document.createElement('div');
  div.innerHTML = `
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main></main>
    <footer>© 2025 My Site</footer>
  `;
  
  div.querySelector('main').append(content);
  return div;
}

function HomePage() {
  const content = document.createElement('div');
  content.innerHTML = '<h1>Home</h1>';
  return createLayout(content);
}

router.addRoute('/', HomePage);
```

### Pattern 2: Lazy Loading

```javascript
// Only create expensive components when needed
router.addRoute('/heavy', () => {
  // This code only runs when user visits /heavy
  const div = document.createElement('div');
  // ... expensive operations
  return div;
});
```

### Pattern 3: Route Guards

```javascript
function requireAuth(component) {
  return () => {
    if (isLoggedIn()) {
      return component();
    } else {
      router.navigate('/login');
      return document.createElement('div');
    }
  };
}

router.addRoute('/profile', requireAuth(ProfilePage));
```

---

## 🧠 Key Concepts to Understand

### 1. Single Page Application (SPA)
- **Only one HTML file** is loaded
- JavaScript dynamically changes content
- Feels like a desktop app (fast, smooth)

### 2. Client-Side Routing
- Routing happens in the **browser** (not server)
- JavaScript decides what to show
- Server only sends the initial HTML + JavaScript

### 3. History API
- `pushState()` - Add to history
- `replaceState()` - Change current entry
- `popstate` - Fired on back/forward
- Lets us change URL without reloading

### 4. Event Delegation
- Listen for events on a parent element
- Check what was actually clicked
- Works for dynamically added elements

### 5. Component Pattern
- Each page is a function
- Function returns an HTMLElement
- Keeps code modular and reusable

---

## 🔄 How to Recreate This Router

If you want to build this yourself for learning:

### Step 1: Create the Class
```javascript
class Router {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.routes = new Map();
  }
}
```

### Step 2: Add Route Registration
```javascript
addRoute(path, component) {
  this.routes.set(path, component);
}
```

### Step 3: Add Navigation
```javascript
navigate(path) {
  history.pushState({}, '', path);
  this.loadPage(path);
}
```

### Step 4: Add Page Loading
```javascript
loadPage(path) {
  const component = this.routes.get(path);
  this.container.innerHTML = '';
  if (component) {
    this.container.append(component());
  }
}
```

### Step 5: Add Link Interception
```javascript
start() {
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (anchor && anchor.href.startsWith(location.origin)) {
      e.preventDefault();
      this.navigate(anchor.pathname);
    }
  });
  this.loadPage(location.pathname);
}
```

### Step 6: Add Back/Forward Support
```javascript
constructor(containerId) {
  // ... existing code ...
  window.addEventListener('popstate', () => {
    this.loadPage(location.pathname);
  });
}
```

### Step 7: Add Safety & Normalization
- Check if container exists
- Normalize paths (add/remove slashes)
- Add 404 handling

---

## 🐛 Common Issues & Solutions

### Issue 1: "Page Not Found" on Refresh
**Problem:** Refreshing `/about` gives 404
**Cause:** Server doesn't know about `/about`
**Solution:** Configure server to serve `index.html` for all routes

**For Vite (development):**
Already configured! Vite handles this.

**For Production (Nginx):**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Issue 2: Links Reload the Page
**Problem:** Clicking links still reloads
**Cause:** Forgot to call `router.start()`
**Solution:** Always call `start()` after registering routes

### Issue 3: Back Button Doesn't Work
**Problem:** Back button doesn't change page
**Cause:** Not listening to `popstate`
**Solution:** Already fixed in constructor!

---

## 🚀 Next Steps

To extend this router, you could add:

1. **Route Parameters**
   ```javascript
   router.addRoute('/user/:id', UserPage);
   // Access: router.getParams() => { id: '123' }
   ```

2. **Query Strings**
   ```javascript
   // URL: /search?q=hello
   // Access: router.getQuery() => { q: 'hello' }
   ```

3. **Nested Routes**
   ```javascript
   router.addRoute('/admin', AdminLayout);
   router.addRoute('/admin/users', AdminUsersPage);
   ```

4. **Route Middleware**
   ```javascript
   router.beforeEach((to, from, next) => {
     if (requiresAuth(to) && !isLoggedIn()) {
       next('/login');
     } else {
       next();
     }
   });
   ```

5. **Transitions**
   ```javascript
   // Add fade-in/fade-out when changing pages
   ```

---

## 📝 Summary

This router provides:
✅ URL-based navigation
✅ No page reloads
✅ Back/forward button support
✅ Link interception
✅ 404 handling
✅ Clean, simple API

It's perfect for small to medium SPAs. For large apps, consider frameworks like React Router or Vue Router, but understanding this simple router will help you understand how they work!

---

**Questions?** Try modifying the code, add console.logs, and see what happens. The best way to learn is by experimenting! 🎉
