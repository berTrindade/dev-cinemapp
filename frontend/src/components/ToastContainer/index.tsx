import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';
import Toast from './Toast';
import { ToastMessage } from '~/types/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

    const messagesWithTransitions = useTransition(messages, {
        from: { 
            right: '-120%', 
            opacity: 0
        },
        enter: { 
            right: '0%', 
            opacity: 1 
        },
        leave: { 
            right: '-120%',
            opacity: 0
        },
        keys: messages.map((message, _) => message.id)
      });

  return (
    <Container>
      {messagesWithTransitions((styles, item) => (
        <Toast
            key={item.id} 
            style={styles} 
            message={item} 
         />
      ))}
    </Container>
  );
};

export default ToastContainer;