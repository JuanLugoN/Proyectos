/**
 * Clase que grafica una Lista de datos.
 */
public class GraficadoraSVG<T extends DatoGraficable<T>>{

	private class Dato<T extends DatoGraficable<T>> {

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
	private ColorSVG[] colores = {ColorSVG.DARKSLATEGRAY, ColorSVG.BROWN, ColorSVG.PURPLE, ColorSVG.LEMONCHIFFON,
	ColorSVG.MEDIUMBLUE, ColorSVG.MEDIUMSEAGREEN, ColorSVG.YELLOW, ColorSVG.ORANGE, ColorSVG.ORANGERED, 
	ColorSVG.DARKRED, ColorSVG.TOMATO, ColorSVG.DARKSLATEBLUE, ColorSVG.SEAGREEN, ColorSVG.DARKBLUE,
	ColorSVG.LIGTHSALMON, ColorSVG.KHAKI, ColorSVG.MEDIUMPURPLE, ColorSVG.PINK};

	/* Elementos a graficar */
	private T[] datos;

	/*To tal de frecuencias en la grafica*/
	private int valorTotal;

	/**
	 * Constructor que recibe una lista de datos a graficar, y el total de las frecuencias en la grafica
	 * @param datos datos de la grafica.
	 * @param valorTotal valor total de lo datos.
	 */
	private GraficadoraSVG(T[] datos, int valorTotal) {
		this.datos = datos;
		this.valorTotal = valorTotal;
	}

	/**
	 * Devuleve una grafica de pastel en codigo svg de los datos.
	 * @return grafica de pastel en codigo svg.
	 */
	public String graficaPastel() {
		ColorSVG[] colores = revuelveColores();
		int i = 0, noElementos = datos.length, radio = 200, dy = 500, frecuenciaAcumulada = 0;
		ColorSVG fondo = colores[noElementos];
		Lista<Dato<T>> elementos = new Lista<Dato<T>>();
		String grafica = String.format("<svg width='500' height='%d' xmlns='http://www.w3.org/2000/svg'>\n", noElementos*30 + 540);
		double angulo = 0,xi, yi, xf, yf;
		
		if (noElementos == 0){
			grafica += String.format("<circle cx='240' cy='240' r='200' fill='%s' />",fondo.toString());
			grafica += String.format("<rect x='40' y='%d' width='20' height='20' fill='%s'/>\n",500,fondo.toString());
			grafica += String.format("<text fill='black' font-family='sans-serif' font-size='18' x='240' dy='%d' text-anchor='middle'>%s</text>",500 + 16,"otros");
			return grafica += "</svg>";
		}

		if (noElementos == 1 && datos[0].frecuencia() == valorTotal) {
			grafica += String.format("<circle cx='240' cy='240' r='200' fill='%s' />",fondo.toString());
			grafica += String.format("<rect x='40' y='%d' width='20' height='20' fill='%s'/>\n",500,fondo.toString());
			grafica += String.format("<text fill='black' font-family='sans-serif' font-size='18' x='240' dy='%d' text-anchor='middle'>%s</text>",500 + 16,datos[0].get());
			return grafica += "</svg>";
		}


		for (T elemento : datos) {
			elementos.agrega(new Dato<T>(elemento,colores[i]));
			xi = 240 + radio*Math.cos(Math.toRadians(angulo));
			yi = 240 + radio*Math.sin(Math.toRadians(angulo));
			angulo += 360/(	(double)valorTotal/(double)elemento.frecuencia());
			xf = 240 + radio*Math.cos(Math.toRadians(angulo));
			yf = 240 + radio*Math.sin(Math.toRadians(angulo));
			grafica += String.format("\t<path d='M 240 240 L %.4f %.4f A 200 200 0 %d 1 %.4f %.4f z' fill='%s' stroke-width='2' stroke='white'/>\n",
			xi, yi,elemento.frecuencia() > valorTotal/2? 1 : 0 , xf, yf, colores[i].toString());
			grafica += String.format("<rect x='40' y='%d' width='20' height='20' fill='%s'/>\n",dy,elementos.getUltimo().color.toString());
			grafica += String.format("<text fill='black' font-family='sans-serif' font-size='18' x='240' dy='%d' text-anchor='middle'>%s</text>\n",dy + 16,elementos.getUltimo().elemento.get());
			dy += 30;
			i++;
			frecuenciaAcumulada += elemento.frecuencia();
		}
		xi = 240 + radio*Math.cos(Math.toRadians(angulo));
		yi = 240 + radio*Math.sin(Math.toRadians(angulo));
		angulo += 360/(	(double)valorTotal/(double)(valorTotal - frecuenciaAcumulada));
		xf = 240 + radio*Math.cos(Math.toRadians(angulo));
		yf = 240 + radio*Math.sin(Math.toRadians(angulo));
		grafica += String.format("\t<path d='M 240 240 L %.4f %.4f A 200 200 0 %d 1 %.4f %.4f z' fill='%s' stroke-width='2' stroke='white'/>\n",
		xi, yi, frecuenciaAcumulada > valorTotal/2 ? 0 : 1, xf, yf, fondo.toString());
		grafica += String.format("<rect x='40' y='%d' width='20' height='20' fill='%s'/>\n",dy,fondo.toString());
		grafica += String.format("<text fill='black' font-family='sans-serif' font-size='18' x='240' dy='%d' text-anchor='middle'>%s</text>",dy + 16,"otros");
		return grafica += "</svg>";
	}

	private ColorSVG[] revuelveColores() {
		Diccionario<Integer,Integer> numeros = new Diccionario<Integer,Integer>(18);
		ColorSVG[] c = new ColorSVG[18];
		int j;
		for (int i = 0;i < 18; i++) {
			j = (int) (Math.random()*18);
			while (numeros.contiene(j))
				j = (int) (Math.random()*18);
			numeros.agrega(j,j);
			c[i] = colores[j];
		}
		return c;
	}

	/**
	 * Devuleve una grafica de barras en codigo svg de los datos.
	 * @param datos datos de la grafica.
	 * @param valorTotal valor total de lo datos.
	 * @return grafica de pastel en codigo svg.
	 */
	public String graficaBarras() {
		return null;
	}

	public static void main(String[] args) {
		Palabra[] palabras = new Palabra[5];
		palabras[0] = new Palabra("Hola",38);
		palabras[1] = new Palabra("Hola",10);
		palabras[2] = new Palabra("Hola",7);
		palabras[3] = new Palabra("Hola",18);
		palabras[4] = new Palabra("Hola",9);
		GraficadoraSVG<Palabra> g = new GraficadoraSVG<Palabra>(palabras,100); 
		System.out.println(g.graficaPastel());
	}
}