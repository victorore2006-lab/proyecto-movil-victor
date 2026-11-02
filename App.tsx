import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Encabezado from './components/Encabezado';
import CajaEstadistica from './components/CajaEstadistica';
import TarjetaEjercicio from './components/TarjetaEjercicio';

export default function App() {
  return (
    <ScrollView style={styles.fondo} contentContainerStyle={styles.contenedor}>
      <Encabezado
        titulo="Mi rutina de hoy"
        subtitulo="Lunes · Tren superior"
      />

      <View style={styles.filaEstadisticas}>
        <CajaEstadistica valor="4" etiqueta="ejercicios" />
        <CajaEstadistica valor="45" etiqueta="minutos" />
        <CajaEstadistica valor="320" etiqueta="kcal" />
      </View>

      <Text style={styles.tituloSeccion}>Ejercicios</Text>

      <TarjetaEjercicio
        nombre="Press de banca"
        series={4}
        repeticiones={10}
        grupoMuscular="pecho"
      />

      <TarjetaEjercicio
        nombre="Remo con barra"
        series={4}
        repeticiones={12}
        grupoMuscular="espalda"
        destacado
      />

      <TarjetaEjercicio
        nombre="Press militar"
        series={3}
        repeticiones={10}
        grupoMuscular="hombros"
      />

      <TarjetaEjercicio
        nombre="Curl de bíceps"
        series={3}
        repeticiones={12}
        grupoMuscular="bíceps"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#f4f4f4',
  },
  contenedor: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  filaEstadisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginBottom: 25,
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 12,
    textAlign: 'left',
  },
});