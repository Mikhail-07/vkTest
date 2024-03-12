import ReactDOM from 'react-dom/client';
import App from './App';
import { createContext } from 'react';
import MyStore, { IMyStore } from './store/MyStore';

interface IContext {
  store: IMyStore;
}

export const Context = createContext<IContext | null>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{store: new MyStore()}}>
    <App />
  </Context.Provider>
);