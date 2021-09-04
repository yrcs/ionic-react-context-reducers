import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  useIonAlert,
} from "@ionic/react";
import { useRef } from "react";
import { connect } from "../../data/connect";
import { addPerson } from "../../data/person/person.action";
import { PersonState } from "../../data/person/person.state";
import { nanoid } from "nanoid";

interface StateProps {
  count: number;
  people: Partial<PersonState>[];
}

interface DispatchProps {
  addPerson: typeof addPerson;
}

interface PersonProps extends StateProps, DispatchProps {}

const Person: React.FC<PersonProps> = ({ count, people, addPerson }) => {
  const nameInputRef = useRef<HTMLIonInputElement>(null);
  const ageInputRef = useRef<HTMLIonInputElement>(null);
  const [present] = useIonAlert();
  const addPersonClick = () => {
    const nameVal = nameInputRef.current!.value;
    const ageVal = ageInputRef.current!.value;
    const name = nameVal ? nameVal.toString() : "";
    const age = ageVal ? +ageVal : 0;

    if (!name.trim() || !age) {
      present({
        header: "Warning: Invalid input!",
        message: "Invalid 'Name' or 'Age', please enter again!",
        buttons: ["OK"],
      });
      return;
    }
    const personObj = { id: nanoid(), name, age };
    addPerson(personObj);
    nameInputRef.current!.value = null;
    ageInputRef.current!.value = null;
  };

  return (
    <IonContent>
      <h2>Person, the sum above: {count}</h2>
      <IonList>
        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonInput ref={nameInputRef} placeholder="Enter the name" />
        </IonItem>
        <IonItem>
          <IonLabel>Age</IonLabel>
          <IonInput
            ref={ageInputRef}
            type="number"
            placeholder="Enter the age (only number)"
          />
        </IonItem>
      </IonList>
      <IonButton expand="block" onClick={addPersonClick}>
        Add
      </IonButton>
      {people.map((p) => {
        return (
          <IonItem key={p.id}>
            <IonLabel>
              Name: {p.name}, Age: {p.age}
            </IonLabel>
          </IonItem>
        );
      })}
    </IonContent>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    count: state.counter.count,
    people: state.person,
  }),
  mapDispatchToProps: {
    addPerson,
  },
  component: Person,
});
