// This script helps properly resolve paths when viewed locally or on GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    // Fix image paths that are broken
    document.querySelectorAll('img').forEach(function(img) {
        if (img.src.includes('/resources/stat')) {
            // Skip analytics pixels
            return;
        }
        
        if (img.src.startsWith('http')) {
            // Skip external URLs
            return;
        }
        
        // If image is not found, try to find it with a different path
        img.onerror = function() {
            const originalSrc = this.src;
            // Try different path variations
            if (originalSrc.includes('/resources/')) {
                this.src = originalSrc.replace('/resources/', './resources/');
            }
        };
    });
    
    // Intercept form submissions for search
    document.querySelectorAll('form').forEach(function(form) {
        if (form.action && (form.action.includes('/books/n/gene/') || form.action.includes('/books/') || form.id === 'bk_srch')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const searchInput = form.querySelector('input[name="term"]');
                if (searchInput) {
                    const searchTerm = searchInput.value;
                    window.location.href = './search.html?term=' + encodeURIComponent(searchTerm);
                }
            });
        }
    });
    
    // Fix links that might still have /books/, /mirror/, or /core/ prefixes
    document.querySelectorAll('a').forEach(function(link) {
        if (link.href && !link.href.startsWith('http')) {
            let href = link.getAttribute('href');
            if (href) {
                // Fix absolute paths to be relative to the current deployment
                if (href.startsWith('/books/')) {
                    link.setAttribute('href', href.replace('/books/', '/'));
                } else if (href.startsWith('/mirror/')) {
                    link.setAttribute('href', href.replace('/mirror/', '/'));
                } else if (href.startsWith('/core/')) {
                    link.setAttribute('href', href.replace('/core/', '/'));
                }
            }
        }
    });
});
