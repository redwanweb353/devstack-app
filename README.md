Project Name : # Dev Stack 
Description : DevStack is a responsive technology stack management web application that allows developers to explore different technologies and build their own personalized tech stack. Users can add technologies, prevent duplicates, and manage their selected stack by removing individual or all items.

Technologies Used :
React
TypeScript
Tailwind CSS
DaisyUI
React Icons
React Toastify

Key feature : 
1. Explore Technologies — Browse different technologies with their category, rating, difficulty level, and description.
2. Build Your Tech Stack — Add your preferred technologies to a personal stack and prevent duplicate technologies from being added.
3. Stack Management — Remove technologies individually or clear the entire stack with a single action.
                                                                                                                                    

// question answer
1.JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes React UI code easier to write and understand.

2.Props are used to pass data from a parent to a child component, while state stores and manages data inside a component. Props are read-only, but state can be updated.

3. useState is a React Hook used to create and manage component state. In my DevStack project, I used it to store and update the technologies added to the user's stack.

4.useEffect is used to handle side effects in React. I used it to fetch and load the technology data from a JSON file when the component was loaded.

5.A unique key helps React identify each item in a list and efficiently update the DOM when items are added, removed, or changed.

6. Conditional rendering means displaying different UI based on a condition. In my project, I used it to show an empty stack message when no technology was added to the stack.

7.Data is passed from parent to child through props. To send data or trigger an action from child to parent the parent passes a callback function as a prop, which the child can call
