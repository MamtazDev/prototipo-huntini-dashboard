import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error from "../pages/Error";
import FindProperties from "../pages/FindProperties";
import AgentDashboard from './../components/agentDashboard/AgentDashboard';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <AgentDashboard/>
            },
            {
                path: 'find-properties',
                element: <FindProperties/>
            }
        ]
    }
])