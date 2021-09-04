import {
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import { connect } from "../../data/connect";
import { minus, plus, plusAsync } from "../../data/count/count.action";

// If route component, need to extends RouteComponentProps
interface OwnProps {}

interface StateProps {
  count: number;
  personCount: number;
}

interface DispatchProps {
  plus: typeof plus;
  minus: typeof minus;
  plusAsync: typeof plusAsync;
}

interface CountProps extends OwnProps, StateProps, DispatchProps {}

const Count: React.FC<CountProps> = ({
  count,
  personCount,
  plus,
  minus,
  plusAsync,
}) => {
  const [countNumber, setCountNumber] = useState<1 | 2 | 3>(1);

  return (
    <>
      <h2>Count, the total number of people below: {personCount}</h2>
      <h4>Sum: {count}</h4>
      <IonItem>
        <IonLabel>Plus/Minus Number</IonLabel>
        <IonSelect
          value={countNumber}
          onIonChange={(e) => {
            setCountNumber(e.detail.value as any);
          }}
        >
          <IonSelectOption value={1}>1</IonSelectOption>
          <IonSelectOption value={2}>2</IonSelectOption>
          <IonSelectOption value={3}>3</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonButton expand="block" onClick={() => plus(countNumber * 1)}>
        +
      </IonButton>
      <IonButton expand="block" onClick={() => minus(countNumber * 1)}>
        -
      </IonButton>
      <IonButton expand="block" onClick={() => plusAsync(countNumber * 1)}>
        + (Async)
      </IonButton>
    </>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    count: state.counter.count,
    personCount: state.person.length,
  }),
  mapDispatchToProps: {
    plus,
    minus,
    plusAsync,
  },
  component: Count,
});
