import Journal from '../components/pages/journal';
import Community from '../components/pages/community';
import Calendar from '../components/pages/calendar';
import Shop from '../components/pages/shop';
import Achievements from '../components/pages/achievements';

const routes = [
    {
        path: "/journal",
        component: Journal
    },
    {
        path: "/community",
        component: Community
    },
    {
        path: "/calendar",
        component: Calendar
    },
    {
        path: "/shop",
        component: Shop
    },
    {
        path: "/achievements",
        component: Achievements
    },
];

export default routes;