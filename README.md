# Workshop

### 1. Bridges nativas
 Selecione a branch bridge-example para o codigo de exemplo de bridge nativa

 Um codigo que tem um contador que soma a cada 1 segundo atraves de uma bridge 
 onde a contagem e feita com uma thread nativa android para que funcione enquanto 
 a app esta em background.

 Para comparar as vantagens use o useMemory em vez da bridge e repare que ao minimizar o app 
 o contador para.


### 2. State Management
  Comparativo entre os state management  num app simples de Contador com a seguinte estrutura
```js
  state {
    count: 0,
  }
```
action de adicionar 1
```js
 addCount = count => count + 1;
```
action de subtrair 1
```js
  subCount = count => count + 1;
```


- Redux (Branch redux-example)
- Zustand (Branch zustand-example)
- Context APi (Branch context-example)

[zustand](https://github.com/react-spring/zustand)

[redux](https://redux.js.org/)

[context](https://pt-br.reactjs.org/docs/context.html)
