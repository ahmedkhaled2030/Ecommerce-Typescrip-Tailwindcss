import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import {
  actGetProductsByCategories,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import Loading from "@components/feedback/Loading/Loading";
import { GridList } from "@components/common";
const Products = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const params = useParams();
  useEffect(() => {
    dispatch(actGetProductsByCategories(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
