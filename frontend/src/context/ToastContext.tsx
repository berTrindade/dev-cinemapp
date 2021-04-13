import { 
    createContext, 
    useCallback, 
    useContext, 
    useMemo, 
    useState
} from "react"

import { v4 as uuid } from 'uuid';
import ToastContainer from "~/components/ToastContainer";

import { ToastMessage } from '~/types/toast';

export interface IToastContextData {
    addToast: (message: Omit<ToastMessage, 'id'>) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext({} as IToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([]);

    const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {

        const id = uuid();

        const toast = {
            id, 
            type, 
            title,
            description
        };

        setMessages(oldMessages => [...oldMessages, toast]);
    }, []);

    const removeToast = useCallback((id: string): void => {
          setMessages(prevState => prevState.filter(message => message.id !== id));
    }, [setMessages]);

    const values = useMemo(() => ({ addToast, removeToast }), [addToast, removeToast]);

    return (
        <ToastContext.Provider value={values}>
            {children}
            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    );
}

function useToast(): IToastContextData {
    const context = useContext<IToastContextData>(ToastContext);
  
    if (!context) {
      throw new Error("useToast must be used within ToastsProvider");
    }
  
    return context;
}
  
  export { ToastProvider, useToast };    