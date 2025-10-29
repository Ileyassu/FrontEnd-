# How JSX Works - Complete Explanation

## Table of Contents
1. [What is JSX?](#what-is-jsx)
2. [The JSX Workflow](#the-jsx-workflow)
3. [Step-by-Step Transformation](#step-by-step-transformation)
4. [Your Custom JSX Runtime](#your-custom-jsx-runtime)
5. [How TypeScript Processes JSX](#how-typescript-processes-jsx)
6. [Visual Diagram](#visual-diagram)

---

## What is JSX?

**JSX (JavaScript XML)** is a syntax extension that lets you write HTML-like code inside JavaScript/TypeScript files.

### Example:
```tsx
const element = <div className="box">Hello World</div>;
```

**Important**: Browsers don't understand JSX! It needs to be converted to regular JavaScript.

---

## The JSX Workflow

Here's the complete journey from JSX to working code:

```
Your Code (JSX)
    ↓
TypeScript Compiler
    ↓
Vite/ESBuild
    ↓
Custom JSX Runtime
    ↓
JavaScript Function Calls
    ↓
Browser Understands It!
```

---

## Step-by-Step Transformation

### **Step 1: You Write JSX**

```tsx
// src/main.tsx
function MyComponent() {
  return <div className="container">Hello World</div>;
}
```

### **Step 2: Vite/ESBuild Transforms It**

Your `vite.config.ts` tells ESBuild how to handle JSX:

```typescript
esbuild: {
  jsx: "transform",              // Transform JSX
  jsxDev: false,                 // No dev mode
  jsxImportSource: "@",          // Import from '@' alias (src/)
  jsxInject: `import { jsx } from '@/jsx-runtime'`,  // Auto-inject import
  jsxFactory: "jsx.component",   // Use jsx.component() function
}
```

**What happens**:
- ESBuild sees `<div>...</div>`
- It converts it to function calls
- It automatically adds the import at the top

### **Step 3: JSX Becomes Function Calls**

Your JSX:
```tsx
<div className="container">Hello World</div>
```

Gets transformed to:
```javascript
jsx.component("div", { className: "container" }, "Hello World")
```

**Full transformation example**:

**Before (your code)**:
```tsx
function MyComponent() {
  return (
    <div className="container">
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}
```

**After (what browser receives)**:
```javascript
import { jsx } from '/src/jsx-runtime.ts';

function MyComponent() {
  return jsx.component(
    "div",
    { className: "container" },
    jsx.component("h1", null, "Title"),
    jsx.component("p", null, "Paragraph")
  );
}
```

### **Step 4: Your JSX Runtime Executes**

Now `jsx.component()` from your `src/jsx-runtime.ts` runs:

```typescript
export const jsx = {
  component(
    component: string | Component,
    props: Record<string, any> | null,
    ...children: any[]
  ) {
    // 1. Handle props
    if (!props) props = {};
    props.children = children.flat(Infinity);

    // 2. If it's a function component, call it
    if (typeof component === "function") {
      return component(props);
    }

    // 3. If it's a string (HTML tag), create DOM element
    const element = document.createElement(component); // Creates <div>
    
    // 4. Set attributes
    for (const [key, value] of Object.entries(props)) {
      if (key === "children") continue;
      else if (key === "className") element.setAttribute("class", value);
      else element.setAttribute(key, value);
    }

    // 5. Append children
    element.append(...props.children);

    // 6. Return the actual DOM element
    return element;
  },
};
```

### **Step 5: DOM Element is Created**

The result is a real DOM element:
```javascript
<div class="container">
  <h1>Title</h1>
  <p>Paragraph</p>
</div>
```

This can now be added to the page:
```typescript
document.getElementById('app')?.append(<MyComponent />);
```

---

## Your Custom JSX Runtime

### Why Do You Have a Custom Runtime?

**React's JSX runtime**: Creates virtual DOM objects (not real DOM)
**Your custom JSX runtime**: Directly creates real DOM elements

### What Each Part Does

#### 1. **Type Definitions** (Top of `jsx-runtime.ts`)

```typescript
declare global {
  module JSX {
    type IntrinsicElements = Record<
      keyof HTMLElementTagNameMap,
      Record<string, any>
    >;
  }
}
```

**What this does**: Tells TypeScript which HTML tags are valid:
- `<div>` ✅ Valid
- `<span>` ✅ Valid
- `<fakeelement>` ❌ TypeScript error

#### 2. **The Component Function**

```typescript
export const jsx = {
  component(component, props, ...children) {
    // This function runs every time JSX is used
  }
};
```

**What this does**: 
- Receives the transformed JSX
- Creates actual DOM elements
- Returns them so they can be added to the page

---

## How TypeScript Processes JSX

### TypeScript Configuration

Your `tsconfig.json` has:

```json
{
  "jsx": "preserve",           // Keep JSX syntax for Vite to handle
  "jsxImportSource": "@",      // Import runtime from '@' (src/)
}
```

### Processing Steps

1. **TypeScript sees JSX syntax**:
   ```tsx
   <div>Hello</div>
   ```

2. **TypeScript checks types**:
   - Is `<div>` a valid element? (checks `JSX.IntrinsicElements`)
   - Is `className` a valid prop?
   - Are children valid?

3. **TypeScript preserves JSX** (doesn't transform it yet):
   ```tsx
   <div>Hello</div>  // Still JSX
   ```

4. **Vite/ESBuild transforms it** (at build/dev time):
   ```javascript
   jsx.component("div", null, "Hello")
   ```

5. **Your runtime executes it**:
   ```javascript
   const element = document.createElement("div");
   element.textContent = "Hello";
   return element;
   ```

---

## Visual Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    YOUR CODE (src/main.tsx)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   function App() {                                              │
│     return <div className="box">Hello</div>;                    │
│   }                                                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    TYPESCRIPT COMPILER                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   • Checks JSX syntax is valid                                  │
│   • Checks types (className is string, etc.)                    │
│   • Preserves JSX (jsx: "preserve")                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    VITE/ESBUILD                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   • Sees jsxFactory: "jsx.component"                            │
│   • Injects: import { jsx } from '@/jsx-runtime'                │
│   • Transforms JSX to function calls                            │
│                                                                 │
│   OUTPUT:                                                       │
│   import { jsx } from '@/jsx-runtime';                          │
│   function App() {                                              │
│     return jsx.component("div", {className:"box"}, "Hello");    │
│   }                                                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    YOUR JSX RUNTIME (jsx-runtime.ts)            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   jsx.component("div", {className:"box"}, "Hello")              │
│         ↓                                                       │
│   const element = document.createElement("div");                │
│   element.setAttribute("class", "box");                         │
│   element.textContent = "Hello";                                │
│   return element;                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    BROWSER RECEIVES                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   A real DOM element:                                           │
│   <div class="box">Hello</div>                                  │
│                                                                 │
│   Which can be added to the page:                               │
│   document.getElementById('app').append(element);               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Comparison with React

### React's Approach:
```tsx
// React JSX
<div>Hello</div>

// Becomes:
React.createElement("div", null, "Hello")

// Returns:
{ type: "div", props: {}, children: ["Hello"] }  // Virtual DOM object
```

### Your Custom Approach:
```tsx
// Your JSX
<div>Hello</div>

// Becomes:
jsx.component("div", null, "Hello")

// Returns:
<div>Hello</div>  // Real DOM element (not virtual)
```

**Key Difference**: 
- React creates virtual DOM → later converts to real DOM
- Your runtime creates real DOM directly → faster but less flexible

---

## Real Example Walkthrough

Let's trace a complete example:

### 1. You Write:
```tsx
function Button() {
  return (
    <button className="btn" onclick="alert('Hi')">
      Click Me
    </button>
  );
}

document.getElementById('app')?.append(<Button />);
```

### 2. TypeScript Validates:
- ✅ `button` is a valid HTML element
- ✅ `className` is a valid attribute
- ✅ `onclick` is a valid attribute

### 3. Vite Transforms:
```javascript
import { jsx } from '@/jsx-runtime';

function Button() {
  return jsx.component(
    "button",
    { className: "btn", onclick: "alert('Hi')" },
    "Click Me"
  );
}

document.getElementById('app')?.append(jsx.component(Button, null));
```

### 4. First Call - jsx.component(Button, null):
```javascript
// component = Button (function)
// props = null

// Check: is it a function? YES
if (typeof component === "function") {
  return component(props);  // Call Button()
}
```

### 5. Button() Executes - jsx.component("button", {...}, "Click Me"):
```javascript
// component = "button" (string)
// props = { className: "btn", onclick: "alert('Hi')" }
// children = ["Click Me"]

// Check: is it a function? NO
// So create DOM element:
const element = document.createElement("button");

// Set attributes:
element.setAttribute("class", "btn");
element.setAttribute("onclick", "alert('Hi')");

// Add children:
element.append("Click Me");

// Return:
return element;  // <button class="btn" onclick="alert('Hi')">Click Me</button>
```

### 6. Final Result:
```html
<button class="btn" onclick="alert('Hi')">Click Me</button>
```

Added to the page!

---

## Key Takeaways

1. **JSX is just syntax sugar** - It's not real JavaScript, just a nicer way to write code

2. **Build tools transform it** - Vite/ESBuild converts JSX to function calls

3. **Your runtime creates DOM** - `jsx.component()` builds actual HTML elements

4. **TypeScript checks types** - Makes sure you don't make mistakes with element names or attributes

5. **It all happens automatically** - You just write JSX, the tools handle the rest

---

## Why This Approach?

### Advantages:
- ✅ No React dependency (ft_transcendence requirement)
- ✅ Direct DOM manipulation (faster for simple apps)
- ✅ Full control over how elements are created
- ✅ Learning how JSX actually works

### Disadvantages:
- ❌ No virtual DOM (less efficient for complex UIs)
- ❌ No component lifecycle (no useState, useEffect, etc.)
- ❌ Manual state management

---

## Common Questions

### Q: Do I need to modify jsx-runtime.ts?
**A**: No! It's complete. Just use JSX in your components.

### Q: Can I use React components?
**A**: No, this is a custom runtime. React components won't work.

### Q: Can I add event listeners?
**A**: Yes! Use attributes like `onclick="myFunction()"` or add them manually after creation.

### Q: Why use custom JSX instead of plain JavaScript?
**A**: JSX is cleaner and more readable for UI code. Compare:

```tsx
// JSX
<div className="container">
  <h1>Title</h1>
  <p>Text</p>
</div>

// Plain JS
const div = document.createElement('div');
div.className = 'container';
const h1 = document.createElement('h1');
h1.textContent = 'Title';
const p = document.createElement('p');
p.textContent = 'Text';
div.appendChild(h1);
div.appendChild(p);
```

JSX is much cleaner!

---

## Conclusion

You now understand the complete JSX workflow:
1. You write JSX syntax
2. TypeScript validates it
3. Vite transforms it to function calls
4. Your custom runtime creates DOM elements
5. Browser displays them

**You don't need to memorize this** - just understand the flow. When you write JSX, know that it becomes real DOM elements through this process!

Happy coding! 🚀
