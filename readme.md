# ReactJsTyping
ReactJsTyping is a simple react component to add effect to strings like typing

# Demo

  ![](https://github.com/DrHrishi/ReactTypings/blob/dependabot/npm_and_yarn/lodash-4.17.19/src/reactjstyping.gif)

# Usage
        import ReactJsTyping from 'reactjs-typing-effect';
        
        const listOfString=['Reactjs Typing','custom speed']
        render(){
            <div style={{ fontSize: 20, color: '#2196F3'}}>
                <ReactJsTyping StringList={listOfString} speed={500}/>
            </div>
        }

### props
  - StringList - Array of list
  - speed - Speed in ms to type
  - cursorColor - cursor color default is #666

### Tech

* [ReactJs] - A JavaScript library for building user interfaces
* [babel]

### Installation
```sh
npm i reactjs-typing-effect
```

### Development

Want to contribute? Great!

Make a pull request

License
----

ISC

   [babel]: <https://babeljs.io/>
   [ReactJs]: <https://reactjs.org/>
