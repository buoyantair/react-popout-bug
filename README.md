**Steps to Reproduce:**

1. Clone Repo, npm install, npm start
2. The popout window will work in all four browsers (Chrome, Firefox, Edge, and IE 11)
3. Now set breakPopout to true in App.js
4. The popout window will still work in Chrome and Firefox
5. On IE 11 and Edge, React will fail to render and throw the error in react-dom-development.js: 

    ```'enumerable' attribute on the property descriptor cannot be set to 'true' on this object```
