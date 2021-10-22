// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import Register from "components/Register/Signup";
import Agriculteur from "components/Agriculteur/AddAnimal";
import ListAnimal from "components/Agriculteur/ListAnimal";
import UserProfile from "views/UserProfile/UserProfile.js";

// core components/views for Client layout


const dashboarClientRoutes = [
    {
      path: "/AddAnimal",
      name: "AddAnimal",
      icon: Dashboard,
      component: Agriculteur,
      layout: "/client"
    },
    {
      path: "/ListAnimal",
      name: "ListAnimal",
      icon: Dashboard,
      component: ListAnimal,
      layout: "/client"
    },
    {
      path: "/user",
      name: "User Profile",
      rtlName: "ملف تعريفي للمستخدم",
      icon: Person,
      component: UserProfile,
      layout: "/client"
    },
    {
        path: "/signin",
        name: "SignIn",
        icon: Language,
         component: Register,
         layout: "/admin"
    
        
      }

    ];

    export default  dashboarClientRoutes;
    
