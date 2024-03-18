import { TCategory } from "@customTypes/catgeory"
import { Row, Col } from "react-bootstrap";
type GridListProps<T> = {
    records: T[];
    renderItem : (record:T) => React.ReactNode
}

type HasId ={id?:number}
// cause if no extend the key={record.id} is problem cause id is optional in typeCategory
const GridList =<T extends HasId> ({ records, renderItem }: GridListProps<T>) => {
    const categoryList =
    records.length > 0 ? 
    records.map((record) => (
      <Col
        key={record.id}
        xs={6}
        md={3}
        className="d-flex justify-content-center mb-5 mt-2"
      >
        {renderItem(record)}
      </Col>
    )): "there are no products"
  return (
    <Row>{categoryList}</Row>
  )
}

export default GridList