import { IonApp, IonItemDivider } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";
import Count from "./components/Count";
import Person from "./components/Person";
import { connect } from "./data/connect";
import { AppContextProvider } from "./data/AppContext";

interface IonicAppProps {}

const IonicApp: React.FC<IonicAppProps> = () => {
  return (
    <IonApp>
      <Count />
      <IonItemDivider
        style={{ minHeight: 1, backgroundColor: "rgb(200,199,204)" }}
      />
      <Person />
    </IonApp>
  );
};

const IonicAppConnected = connect({
  component: IonicApp,
});

const App: React.FC = () => (
  <AppContextProvider>
    <IonicAppConnected />
  </AppContextProvider>
);

export default App;
