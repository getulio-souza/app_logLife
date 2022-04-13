// const dataList = [
//   { key: '1' },
//   { key: '2' },
//   { key: '3' },
//   { key: '4' },
//   { key: '5' },
// ]

// const numCollumns = 2
// const WIDTH = Dimensions.get('window').width

// export default class List extends Component{

//   _renderItem = ({ item, index }) => {
//     let {itemStyle, itemText} = styles
//     return (
//       <View style={itemStyle}>
//         <Text style={itemText}>{item.key}</Text>
//       </View>
//     )
//   }

//   render() {
//     let { box, itemText } = styles
//     return (
//       <View style={box}>
//         <FlatList
//           data={dataList}
//           renderItem={this._renderItem}
//           keyExtractor={(item, index) => index.toString()}
//           numColumns={numCollumns}
//         />
//       </View>
//     )
//   }
// }