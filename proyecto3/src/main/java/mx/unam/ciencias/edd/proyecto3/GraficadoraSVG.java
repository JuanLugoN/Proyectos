package mx.unam.ciencias.edd.proyecto3;

import mx.unam.ciencias.edd.Lista;
/**
 * Clase que grafica una Lista de datos.
 */
public class GraficadoraSVG{

	public class Dato<T extends DatoGraficable<T>> {

		/* Elemento del dato a graficar. */
		public T elemento;

		/* Color asociado del dato a graficar. */
		public ColorSVG color;

		/**
		 * Constructor que recibe el elemento, y el color de un dato a graficar.
		 * @param elemento elemento del dato.
		 * @param color color asociado al dato.
		 */
		public Dato(T elemento, ColorSVG color) {
			this.elemento = elemento;
			this.color = color;
		}

	}

	/** Colores de los datos a graficas. */
	private final static ColorSVG[] colores = 
	{ColorSVG.BURLYWOOD, ColorSVG.MARRON, ColorSVG.PURPLE, ColorSVG.LEMONCHIFFON,
	ColorSVG.MEDIUMBLUE, ColorSVG.MEDIUMSEAGREEN, ColorSVG.YELLOW, ColorSVG.ORANGE, ColorSVG.ORANGERED, 
	ColorSVG.DARKRED, ColorSVG.TOMATO, ColorSVG.DARKSLATEBLUE, ColorSVG.SEAGREEN, ColorSVG.DARKBLUE,
	ColorSVG.LIGTHSALMON, ColorSVG.KHAKI, ColorSVG.MEDIUMPURPLE, ColorSVG.PINK};

	/**
	 * Constructor vacío.
	 */
	private GraficadoraSVG() {}

	/**
	 * Devuleve una grafica de pastel en codigo svg de los datos.
	 * @param datos datos de la grafica.
	 * @param valorTotal valor total de lo datos.
	 * @return grafica de pastel en codigo svg.
	 */
	public static <T extends DatoGraficable<T>> String graficaPastel(Lista<T> datos, int valorTotal) {
		String grafica = "<svg width='500' height='500' xmlns='http://www.w3.org/2000/svg'>\n";
		grafica += "\t<circle cx='240' cy='240' r='200' fill='red'/>\n";
		int radio = 200;
		double angulo = 0;
		int valorDatos = 0;
		double xi, yi, xf, yf;
		for (T elemento : datos) {
			xi = 240 + radio*Math.cos(Math.toRadians(angulo));
			yi = 240 + radio*Math.sin(Math.toRadians(angulo));
			angulo += 360/((double)valorTotal/(double)elemento.frecuencia());
			xf = 240 + radio*Math.cos(Math.toRadians(angulo));
			yf = 240 + radio*Math.sin(Math.toRadians(angulo));
			grafica += String.format("\t<path d='M 240 240 L %.4f %.4f A 200 200 0 0 1 %.4f %.4f z' fill='black' stroke-width='2' stroke='white'/>\n",
			xi, yi, xf, yf);
			valorDatos += elemento.frecuencia();
		}
		grafica += "\t<circle cx='240' cy='240' r='115' fill='white'/>\n";
		return grafica += "</svg>";
	}

	/**
	 * Devuleve una grafica de barras en codigo svg de los datos.
	 * @param datos datos de la grafica.
	 * @param valorTotal valor total de lo datos.
	 * @return grafica de pastel en codigo svg.
	 */
	public static <T extends DatoGraficable<T>> String graficaBarras(Lista<T> datos, int valorTotal) {
		return null;
	}
}