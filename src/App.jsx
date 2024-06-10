import { Provider } from 'react-redux';
import RoutePage from './routers/RoutePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';

export default function App() {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <Provider store={store}>
                <Router>
                    <RoutePage />
                    <ToastContainer />
                </Router>
            </Provider>
        </QueryClientProvider>
    );
}
