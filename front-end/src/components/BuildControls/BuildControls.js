import React, { useContext } from "react";
import BuildControl from "./BuildControl";
import BuildControlsStyle from "./BuildControls.module.css";
import OrderContext from "../contexts/OrderContext";
import Button from "../Button/Button";

const BuildControls = (props) => {
  const labelDefinition = [
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Salad", type: "salad" },
  ];

  let costDisplayer = [BuildControlsStyle.costDisplayer];
  if (props.totalCost > 0) costDisplayer.push(BuildControlsStyle.active);

  const context = useContext(OrderContext);

  return (
    <div className={BuildControlsStyle.main}>
      {labelDefinition.map((ing, ind) => {
        let disableInfo = props.ingredients[ing.type] === 0;
        // console.log(disableInfo)
        return (
          <BuildControl
            type={ing.label}
            add={() => props.addIng(ing.type)}
            remove={() => props.removeIng(ing.type)}
            key={ing + ind}
            disabling={disableInfo}
          />
        );
      })}

      <div className={costDisplayer.join(" ")}>
        <strong>Total Cost : </strong>
        {props.totalCost}
      </div>
      <Button clicked={context.orderHandler} label="Add to Cart!" />
    </div>
  );
};

export default BuildControls;
