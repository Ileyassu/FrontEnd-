/**
 * Router Class - A Simple Client-Side Router
 * 
 * This router lets you build Single Page Applications (SPAs) by:
 * 1. Mapping URL paths to components (functions that return HTML elements)
 * 2. Rendering components without full page reloads
 * 3. Handling browser back/forward buttons
 * 4. Intercepting link clicks for smooth navigation
 */

export class Router {
  // Store all registered routes: path -> component function
  private routes: Map<string, () => HTMLElement> = new Map();
  
  // The HTML element where pages will be rendered
  private container: HTMLElement;
  
  // Custom 404 component (default shows "Page Not Found")
  private notFoundComponent: () => HTMLElement = () => {
    const el = document.createElement('div');
    el.innerHTML = '<h1>404 - Page Not Found</h1>';
    return el;
  };

  /**
   * Creates a new Router instance
   * @param containerId - The ID of the HTML element where pages will be rendered
   * @throws Error if the container element doesn't exist
   */
  constructor(containerId: string) {
    // Find the container element in the DOM
    const el = document.getElementById(containerId);
    
    // SAFETY CHECK: Make sure the element exists before proceeding
    if (!el) {
      throw new Error(
        `Router Error: Could not find element with id="${containerId}". ` +
        `Make sure there's a <div id="${containerId}"></div> in your HTML.`
      );
    }
    
    this.container = el;
    
    // Listen for browser back/forward button clicks
    // The 'popstate' event fires when the user clicks back/forward
    window.addEventListener('popstate', () => {
      // Reload the page that matches the current URL
      this.loadPage(window.location.pathname);
    });
  }

  /**
   * Register a route (URL path) with its component
   * @param path - The URL path (e.g., "/", "/about", "/contact")
   * @param component - A function that returns an HTMLElement to display
   * 
   * Example:
   *   router.addRoute('/home', () => {
   *     const div = document.createElement('div');
   *     div.textContent = 'Welcome Home!';
   *     return div;
   *   });
   */
  addRoute(path: string, component: () => HTMLElement) {
    // Normalize the path (fix trailing slashes, ensure leading slash)
    const normalizedPath = this.normalizePath(path);
    
    // Store in our routes Map
    this.routes.set(normalizedPath, component);
  }

  /**
   * Set a custom 404 (Not Found) component
   * @param component - A function that returns an HTMLElement for 404 pages
   * 
   * Example:
   *   router.setNotFound(() => {
   *     const div = document.createElement('div');
   *     div.innerHTML = '<h1>Oops! Page not found</h1>';
   *     return div;
   *   });
   */
  setNotFound(component: () => HTMLElement) {
    this.notFoundComponent = component;
  }

  /**
   * Navigate to a different page (without reloading)
   * @param path - The path to navigate to (e.g., "/about")
   * 
   * This is called programmatically or by clicking intercepted links
   */
  navigate(path: string) {
    // Normalize the path
    const normalizedPath = this.normalizePath(path);
    
    // Update the browser's URL bar without reloading the page
    // pushState adds a new entry to the browser history
    window.history.pushState({}, '', normalizedPath);
    
    // Load and display the component for this path
    this.loadPage(normalizedPath);
  }

  /**
   * Load and display the component for a given path
   * @param path - The path to load
   * 
   * This is a private method called internally
   */
  private loadPage(path: string) {
    // Normalize the path to match how we stored it
    const normalizedPath = this.normalizePath(path);
    
    // Look up the component function for this path
    const component = this.routes.get(normalizedPath);
    
    // Clear whatever is currently displayed
    this.container.innerHTML = '';
    
    // If we found a matching route, render its component
    if (component) {
      this.container.append(component());
    } else {
      // No matching route found - show 404 page
      this.container.append(this.notFoundComponent());
    }
  }

  /**
   * Start the router
   * Call this once after registering all your routes
   * 
   * This will:
   * 1. Set up link click interception (for SPA navigation)
   * 2. Load the initial page based on the current URL
   */
  start() {
    // LINK INTERCEPTION: Make normal <a> tags work without page reloads
    // Listen for all clicks on the document
    document.addEventListener('click', (e) => {
      // Find if the clicked element (or its parent) is an <a> tag
      const target = e.target as HTMLElement;
      const anchor = target.closest('a') as HTMLAnchorElement | null;
      
      // If not an anchor tag, ignore this click
      if (!anchor) return;
      
      // Get the href attribute
      const href = anchor.getAttribute('href');
      
      // IGNORE these types of links (let them work normally):
      // - Links that open in new tabs (target="_blank")
      // - Download links
      // - External links (rel="external")
      // - Links starting with http/https (external sites)
      // - mailto: links
      // - Hash links (#section)
      // - Empty or null hrefs
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
        return; // Let the browser handle these normally
      }
      
      // This is an internal link - prevent default page reload
      e.preventDefault();
      
      // Use our router to navigate instead
      this.navigate(href);
    });

    // Load the initial page based on current URL
    this.loadPage(window.location.pathname);
  }

  /**
   * Normalize a path to ensure consistency
   * @param path - The path to normalize
   * @returns Normalized path
   * 
   * Examples:
   *   "about" -> "/about"
   *   "/about/" -> "/about"
   *   "/" -> "/"
   */
  private normalizePath(path: string): string {
    // Ensure path starts with "/"
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    
    // Remove trailing slash (except for root "/")
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    
    return path;
  }
}