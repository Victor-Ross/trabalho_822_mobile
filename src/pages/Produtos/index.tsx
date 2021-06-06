import React from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import ProdutosVertical from '../../components/ProdutosVertical';

import styles from './styles';

export default function Produtos() {
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <Text style={{ textTransform: 'uppercase', fontSize: 20, fontWeight: 'bold' }}>
          Produtos
        </Text>
        <ProdutosVertical
         produtos= {[
           {
             url:  "https://cdn.leroymerlin.com.br/products/cabo_flexivel__6mm_50metros_preto_750v_sil_fios_86840551_a1f4_600x600.jpg",
             nome: "Cabo Flexível",
             preco: 5.00,
             comentario: 'Muito flexível 750V'
           },
           {
             url:  "https://cdn.leroymerlin.com.br/products/areia_media_20kg_arteck_89606965_a5b5_600x600.jpg",
             nome: "Areia",
             preco: 10,
             comentario: 'Movediça'
           },
           {
             url:  "https://cdn.leroymerlin.com.br/products/broca_rapida___em_serpentina_12mm_90526681_0001_600x600.jpg",
             nome: "Broca Serpentina",
             preco: 15.3,
             comentario: 'Parece uma serpente'
           },
           {
             url: "https://cdn.leroymerlin.com.br/products/dobradica_4x3_aco_oxidado_uniao_mundial_88392955_0001.jpg_600x600.jpg",
             nome: "Dobradiça",
             preco: 24.95,
             comentario: 'Para portas '
           },
           {
             url: "https://cdn.leroymerlin.com.br/products/torneira_para_tanque_e_jardim_parede_cromado_9130c70_equation_89374614_abf1_600x600.jpg",
             nome: "Torneira",
             preco: 32.2,
             comentario: 'Não beber diretamente'
           },
           {
             url:  "https://cdn.leroymerlin.com.br/products/caixa_de_descarga_branca_9l_tigre_89835340_42ea_600x600.jpg",
             nome: "Caixa de descarga",
             preco: 11.25,
             comentario: 'Você vai precisar'
           },
           {
             url:  "https://cdn.leroymerlin.com.br/products/refletor_led_50w_luz_branca_bivolt_inspire_90071226_90cd_600x600.jpeg",
             nome: "Refletor LED",
             preco: 30,
             comentario: 'Reflete tudo'
           },
           {
             url:  "https://cdn.leroymerlin.com.br/products/cimento_votoran_obras_especiais_50kg_89869654_2f60_600x600.jpg",
             nome: "Cimento Votoran",
             preco: 19.50,
             comentario: 'Não tem construção sem'
           },
           {
             url:  "https://cdn.leroymerlin.com.br/products/caixa_dagua_polietileno_500l_azul_fortlev_89866623_27d3_600x600.jpeg",
             nome: "Caixa de água",
             preco: 29.90,
             comentario: 'Limpar de mês em mês'
           },
           {
             url:  "https://cdn.leroymerlin.com.br/products/telha_ceramica_40x23,3cm_romana_resinada_vermelha_barrobello_88431091_7c6b_600x600.jpeg",
             nome: "Telhas",
             preco: 10.80,
             comentario: 'Não são frágeis'
           },
         ]}
        />
      </View>
    </ScrollView>
  );
}