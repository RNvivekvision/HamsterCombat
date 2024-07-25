import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../Common';

const Home = () => {
  return (
    <RNContainer>
      <RNHeader title={'Home'} back={false}></RNHeader>
    </RNContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
