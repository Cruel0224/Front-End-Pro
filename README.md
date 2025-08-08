DZ 45. Navigation menu with active page highlighting


<strong>Goal:</strong> Combine location, DOM, classes, and history.

<strong>Requirements:</strong>
1. Implement a navigation menu (HTML) with 3 links: /home, /about, /contact.
   
2. Create a Navigation class that:
   
- Tracks window.location.pathname.
- Adds the CSS class "active" to the corresponding menu item.
- Responds to popstate and manually changes the URL on click (via pushState).
