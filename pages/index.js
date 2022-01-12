import { Page, SkeletonBodyText } from "@shopify/polaris";
import Table from "../components/dataTable";
import { useState, useEffect } from "react";
import { http } from "../services/httpServices";

const Index = (props) => {
  const [customers, setCustomers] = useState([]);
  const [cId, setCustomerId] = useState("");

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    id && setCustomerId(id);
    http.getCustomers().then((res) => {
      console.log("res.data.orders", res.data);
      res.data.success && setCustomers(res.data.data);
    });
  }, []);
  return (
    <Page>
      {customers.length > 0 ? (
        <Table data={customers} cId={cId} />
      ) : (
        <SkeletonBodyText />
      )}
    </Page>
  );
};

export default Index;
