import { RouteProp } from "@react-navigation/core"
import { StackNavigationProp } from "@react-navigation/stack"
import { ImageURISource } from "react-native"

export type RouteParamList = {
  Home: undefined,
  Produtos: undefined,
  Produto: {
    url: string;
    nome: string,
    preco: number;
  },
  Cadastro: undefined,
  BemVindo?: undefined
}

export type RouteStackParamList<T extends keyof RouteParamList> = {
  navigation: StackNavigationProp<RouteParamList, T>;
  route: RouteProp<RouteParamList, T>;
}