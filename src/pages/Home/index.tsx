import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProdutosContainer from '../../components/ProdutosContainer';
import { RouteStackParamList } from '../../RouteParamList';


export default function App({ navigation, route } : RouteStackParamList<"Home">) {
  return (
    <ScrollView style={styles.container} >
      <Header />
      <ProdutosContainer 
        title="Destaques"
        viewType={true} 
        produtos={[
          {nome: "Cimento",
          url: "https://cdn.leroymerlin.com.br/products/cimento_cp_iii_40rs_50kg_csn_89728065_9d34_600x600.jpeg",
          preco: 19.90},
          {nome: "Areia",
          url: "https://cdn.leroymerlin.com.br/products/cimento_votoran_obras_especiais_50kg_89869654_2f60_600x600.jpg",
          preco: 18.6
          },
          {nome: "Caixa de água",
          url: "https://cdn.leroymerlin.com.br/products/caixa_dagua_polietileno_500l_azul_fortlev_89866623_27d3_600x600.jpeg",
          preco: 18.6
          },
          {nome: "Cim. elástico",
          url: "https://cdn.leroymerlin.com.br/products/manta_liquida_elastment_cimento_elastico_20kg_cinza_drylevis_90385750_6df8_600x600.jpeg",
          preco: 18.6
          },
          {nome: "Telhas",
          url: "https://cdn.leroymerlin.com.br/products/telha_ceramica_40x23,3cm_romana_resinada_vermelha_barrobello_88431091_7c6b_600x600.jpeg",
          preco: 18.6
          },
        ]
        }
      />
      <ProdutosContainer 
        title="Promoções" 
        viewType={true}
        produtos={[
          {nome: "Cimento ruim",
          url: "https://cdn.awsli.com.br/1606/1606237/produto/6068946863ad359572.jpg",
          preco: 19.90},
          {nome: "Areia ruim",
          url: "https://cdn.awsli.com.br/600x450/1318/1318638/produto/52049972/a2e9e89847.jpg",
          preco: 18.6
          }
        ]
        }
      />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    height: 1000,
  },

  text: {
    color: '#000',
    fontSize: 50
  }
});