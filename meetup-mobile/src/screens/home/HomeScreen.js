import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { fetchMyMeetups } from "./actions";
import { LoadingScreen } from "../../commons";
import { MyMeetupsList } from "./components";
import Colors from "../../../constants/Colors";
import styles from "./styles/HomeScreen";

@connect(state => ({myMeetups: state.home.myMeetups}), {fetchMyMeetups})
class HomeScreen extends Component {

    static navigationOptions = {
        header: ({navigate}) => {
            const style = {backgroundColor: Colors.redColor};

            // Иконка справа сверху
            const right = (
                <TouchableOpacity style={styles.iconAdd} onPress={() => navigate('CreateMeetup')}>
                    <MaterialIcons
                        name="add-circle"
                        size={30}
                        color="#fff"
                    />
                </TouchableOpacity>
            );

            return {style, right};
        },
        tabBar: {
            icon: ({tintColor}) => (
                <FontAwesome
                    name="home"
                    size={25}
                    color={tintColor}
                />
            ),
        },
    };

    componentDidMount () {
        this.props.fetchMyMeetups();
    }

    render () {
        const {
            myMeetups: {
                isFetched,
                data,
                error,
            },
        } = this.props;

        if (!isFetched) {
            return <LoadingScreen />;
        } else if (error.on) {
            return (
                <View>
                    <Text>{error.message}</Text>
                </View>
            );
        }

        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text>HomeScreen</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <MyMeetupsList meetups={data}/>
                </View>
            </View>
        );
    }
}

export default HomeScreen;
