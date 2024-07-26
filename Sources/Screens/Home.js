import { StyleSheet, View } from 'react-native';
import { RNText } from '../Common';
import { HAContainer, EarnPerTap, Points } from '../Components';

const Home = () => {
  return (
    <HAContainer title={'Home'} back={false}>
      <EarnPerTap />

      <Points />
    </HAContainer>
  );
};

const styles = StyleSheet.create({});

export default Home;
