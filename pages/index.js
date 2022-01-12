import { Page, SkeletonBodyText } from "@shopify/polaris";
import Table from "../components/dataTable";
import { useState, useEffect } from "react";
import { http } from "../services/httpServices";

const Index = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    http.getCustomers().then((res) => {
      console.log("res.data.orders", res.data);
      res.data.success && setCustomers(res.data.data);
    });
  }, []);
  return (
    <Page>
      {customers.length > 0 ? <Table data={customers} /> : <SkeletonBodyText />}
    </Page>
  );
};

export default Index;
