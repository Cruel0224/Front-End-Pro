DZ 44. Class for working with transition history (HistoryTracker)


Goal: Practice the History API and storing routes.

Requirements:
1. Create a HistoryTracker class that:
 
- Stores a list of visited URLs in an array.
  
2. Has methods:
  
- push(url) — adds an entry via pushState and stores it in history.
- back() — goes to the previous page via history.back().
  
3. Optional:
   
- Use the popstate event to log the history of navigation.
