import { use } from "react";
import Api from "./api";

export default function Apis({ fetchAPi }) {
  const promis = use(fetchAPi);
  console.log(promis);

  return (
    <div>
      <h3>
        Done
        {promis.map((prom) => (
          <Api key={prom.id} prom={prom}></Api>
        ))}
      </h3>
    </div>
  );
}
