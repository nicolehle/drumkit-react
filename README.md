# Drumkit-react
Created with CodeSandbox
A drum player with keyboard. Cliking is working as well.
<br><br>

### Vanila JS to React.js
It is one of projects, building vanila JavaScript learned from WesBos course to React.js
<br><br>


### Component Tree

```

    -App(component)
          
    -DrumKeys(container)
               
```


### Stateful Data
```
    
    isPlaying: false/true

```
<br>

### Challenge / Solution
Challenge: in playSound function did not work. got error 'code' is undefined<br>
Solution: this.props.code is undefined becuase playSound function hasn't bind with constructor.
<br><br>

### Live Demo
https://codesandbox.io/s/github/nicolehle/drumkit-react
