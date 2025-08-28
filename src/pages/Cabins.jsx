import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Filter from "../ui/Filter";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <Filter
          filterField='discount'
          options={[
            { value: "all", label: "All" },
            { value: "with-discount", label: "With discount" },
            { value: "no-discount", label: "No discount" },
          ]}
        />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
