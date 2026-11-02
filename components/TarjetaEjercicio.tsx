import { StyleSheet, Text, View } from 'react-native';
import Etiqueta from './Etiqueta';

type TarjetaEjercicioProps = {
  nombre: string;
  series: number;
  repeticiones: number;
  grupoMuscular: string;
  destacado?: boolean;
};

export default function TarjetaEjercicio({
  nombre,
  series,
  repeticiones,
  grupoMuscular,
  destacado = false,
}: TarjetaEjercicioProps) {
  return (
    <View
      style={[
        styles.tarjeta,
        destacado && styles.tarjetaDestacada,
      ]}
    >
      <View style={styles.fila}>
        <Text style={styles.nombre}>{nombre}</Text>

        <Etiqueta
          texto={grupoMuscular}
          colorFondo={destacado ? '#7c3aed' : '#2563eb'}
        />
      </View>

      <Text style={styles.detalle}>
        {series} series × {repeticiones} repeticiones
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    padding: 14,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
  },
  tarjetaDestacada: {
    backgroundColor: '#f3e8ff',
    borderColor: '#7c3aed',
    borderWidth: 2,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  nombre: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
  },
  detalle: {
    marginTop: 8,
    fontSize: 14,
    color: '#666666',
  },
});