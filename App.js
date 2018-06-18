import React from 'react';
import { StyleSheet, Button, Animated, Text, View } from 'react-native';


const SidebarWidth = 40

const Sidebar = props => {
  console.log(props.left)
  return (
    <Animated.View
    style={{
      position: 'absolute', 
      backgroundColor: 'blue',
      height: '100%',
      width: SidebarWidth,
      left: props.left,
    }}
    >
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
    <Text style={{flex: 1, backgroundColor: 'pink'}}>asdfasdf asdf asdf sadf asd fdas </Text>
    </View>
    </Animated.View>
  )
}


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      left: new Animated.Value(0),
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open != prevState.open) {
      let animation 
      if (this.state.open) {
        animation = Animated.timing(
          this.state.left,
          {
            toValue: 0,
            duration: 300,
          }
        )
      } else {
        animation = Animated.timing(
          this.state.left,
          {
            toValue: -SidebarWidth,
            duration: 300,
          }
        )
      }
      animation.start()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Sidebar left={this.state.left} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title='toggle' onPress={() => this.setState({ open: !this.state.open })} />
        <Text>{this.state.open ? 'open' : 'closed'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
