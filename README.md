DZ 60. Timer with life cycle control


1. Create a Timer class component that:
- Displays the <strong>number of seconds</strong> that have passed since the component was mounted.
- Has <strong>Start</strong>, <strong>Stop</strong>, and <strong>Reset</strong> buttons.

2. Use lifecycle methods:

- <strong>componentDidMount</strong> – to run an interval that increments a counter every second.
- <strong>componentDidUpdate</strong> – to display the message "Updated: <value>" to the console when the number of seconds changes.
- <strong>componentWillUnmount</strong> – to clear the interval when the component is removed.

3. Add an <strong>Unmount Timer</strong> button that completely removes the component from the DOM (via conditional rendering in the parent component).

<strong>Additionally:</strong>

- Implement saving the timer state in <strong>LocalStorage</strong> (so that the time is restored when the page is reloaded).
- Do some styling via CSS (for example, when the timer is stopped, the numbers turn red).

<strong>Do your homework using class and functional components.</strong>
<strong>That is, there should be 2 versions of the solution: class and functional.</strong>
