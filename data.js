const data = [
	{
		imageURL: "./images/phish/01.png",
		answer: false,
		tips: [
			`Primero de todo, el correo electrónico del remitente contiene el nombre de la empresa y tambien el dominio! Desafortunadamente esto es suficiente para engañar a las personas. Sin embargo, usaria una compañia de electricidad un <a target="_blank" href="https://en.wikipedia.org/wiki/Top-level_domain">TLD</a> como info. para sus emails.<br><br>
			Observe como el email tambien tiene errores gramaticales y ortograficos, tambien muy importante este correo electrónico tiene un saludo impersonal "Estimado cliente" esta es una gran señal de alerta, especialmente para una compañia que exige el pago de sus clientes.<br><br>
			Por ultimo, la premisa de este correo electrónico no tiene sentido. Una compañia generalmente le enviara una factura por correo. Sin embargo, si tiene una facturacion electronica, seria una buena idea iniciar sesion en el sitio web de la compañia y verificar sus facturas (No haga click en ningun enlace del correo). Un buen consejo es llamar a la empresa mediante numero al cliente y consultar sobre la factura.`
		],
	},
	{
		imageURL: "./images/phish/02.png",
		answer: false,
		tips: [
			`Este tipo de phishing es particularmente peligroso ya que la direccion del remitente parece ser completamente legitima (cuenta@fisco.com).Sin embargo, los atacantes pueden redireccionarlo a un link malicioso. Hay un elemento de negligencia por parte de Fisco por no implementar sistemas como SPF, DKIM y DMARC para proteger a sus clientes de la suplantacion de identidad via email.<br><br>
			Las estafas de Phishing generalmente intentan asustarlo diciendo que algo salió mal y que necesitan resolverlo proporcionando su informacion y haciendo algo. En este caso, su cuenta ha sido "bloqueada temporalmente" y deben hacer clic en un enlace para "recuperar el acceso de inmediato".<br><br>
			Un correo electrónico oficial nunca incluiria un hipervínculo que diga "Haga clic aqui" para realizar una accion importante. Ademas esa URL no parece un dominio oficial perteneciente a Fisco. Si hiciera clic en el, probablemente lo llevaria a una pagina que imita la web oficial para que les brinde informacion. La mejor accion seria eliminar el email y, si aun tiene dudas comuníquese con el equipo de soporte y pregunte sobre el estado de su cuenta con ellos`
		],
	},
	{
		imageURL: "./images/legit/01.png",
		answer: true,
		tips: [
			`Por lo general, los emails de Phishing crean una sensasion de urgencia para que el destinatario actue lo mas rapido posible. Este email no parece hacerlo e incluso le da al destinatario la opcion de ignorar el email si no desea restablecer su contraseña<br><br>
			Este email saludo al destinatario por su nombre. Por lo general, los emails de Phishing tienen saludos impersonales como "Estimado cliente" o "Estimado usuario". Tenga cuidado con este tipo de saludos, y en caso de duda, tirelo.<br><br>
			Por ultimo, el email parece haber sido enviado desde un nombre host/nombre de usuario legítimo (noreply@picturely.ca). Si bien hay formas en que los atacantes pueden falsificar esto, generalmente es un buen indicador de que el email es legítimo (Se recomienda no confiar unicamente en esto para probar la legitimidad de un email).`
		],
	},
	{
		imageURL: "./images/legit/02.png",
		answer: true,
		tips: [
			`Este email no solicita al usuario que realice acciones innecesarias, como confimar que desea habilitar la autentificacion de dos factores (Two Factor Authentication) iniciando sesion ni nada. Simplemente informa al usuario sobre un cambio ocurrido en su cuenta. <br><br>
			Además, el email ofrece al destinatario una forma de resolver el problema si no habilito 2FA (Two Factor Authentication). Le informa al usuario que necesita cambiar su contraseña inmediatamente si sospecha que su cuenta ha sido comprometida. Este es un consejo razonable y no parece que sea Phishing<br><br>
			Por ultimo, el email del remitente es legítima y el cuerpo del email en sí esta libre de errores ortográficos o gramaticales. Esto refuerza aún mas la legitimdad del email`
		],
	},

	{
		imageURL: "./images/legit/03.png",
		answer: true,
		tips: [
			`Este anuncio parece totalmente fino y ordinario. Este tipo de publicidad es la que un banco publicaría. No parece haber nada de Phishing al respecto.<br><br>
			Si realmente le gusta la oferta que ofrece este banco pero no esta muy seguro de la legitimidad de este anuncio, una buena tecnica sería buscar el nombre de la oferta. En este caso, si busco algo como "Cuenta de estudiante sin tarifa mensual de Fisco", (con suerte) encontraría el sitio web oficial de Fisco donde podría obtener información sobre la oferta.`
		],
	},
	{
		imageURL: "./images/phish/03.png",
		answer: false,
		tips: [
			`Este es uno de los tipos de ataques Phishing mas antiguos que existen pero el hecho de que sea tan tentador para los usuarios es lo que lo hace muy peligroso. Aunque incluye el logotipo oficial de Amazon, eso por sí solo no garantiza la legitimidad de dichos anuncios.<br><br> 
			Por lo general, cuando hace clic en un enlace como este, el sitio web de Phishing exige toneladas de informacion personal antes de que pueda recibir el "premio". Esto deberia ser una señal de alerta importante para usted y nunca debe ingresar informacion personal en ningun sitio web antes de verificar su legitimidad.<br><br>
			En estos casos, si no es obvio que se enfrenta a un Phishing, un buen consejo a seguir es: Si parece demasiado bueno para ser verdad, probablemente no lo sea.`
		],
	},
	{
		imageURL: "./images/phish/04.png",
		answer: false,
		tips: [
			`Esto es claramente un Phishing ya que el email tiene demasiadas señales de alerta. Primero, los emails intentan que entre en pánico, que actúe de inmediato o "URGENTE" como se indica en el asunto, suelen ser intentos de Phishing.<br><br>
			Otro signo claro es la direccion del remitente. Que tipo de email es imfunpayment@gmail.com? Incluso el nombre en sí sugiere un intento de Phishing irrisorio. <br><br>
			Lo mas importante, es que el email no tiene sentido. Porque un banquero al azar, cuyo cliente supuestamente murió de COVID-19, lo cual es claramente irrelevante y un intento poco entusiasta de causar pánico de alguna manera al incluir el nombre de un virus actual, querría darle un negocio? Tambien tenga en cuenta la mala gramática "Soy banquero" y el mensaje, de quien es y si lo que dice podria ser posible o realista.`
		],
	},
	{
		imageURL: "./images/legit/04.png",
		answer: true,
		tips: [
			`Esto es un tipo común de email donde puede realizar seguimiento de un pedido. Si no realizo dicho pedido, de dicho proveedor "Best Buy", y su direccion de envío no coincide con la indicada, estaría claro que se trata de un Phishing. Por esta razón, es poco probable que se trate de un Phishing porque es muy facil para usted identificar si realizo este pedido o no, por lo que los phishers no enviarian un email tan sospechoso.<br><br>
			Si realizo el pedido pero esta en duda, tambien puede verificar y asegurarse que el numero de referencia del email coincida con el número real. <br><br>
			Además, la direccion del remitente es legítima ya que "canadapost.ca" es un dominio legítimo y casi todas las empresas grandes y reconocidas tienen medidas de seguridad para evitar la suplantacion de identidad. <br><br>
			Como mencione anteriormente, es poco probable que la naturaleza de este email sea un Phishing y como puede ver el email no es agresivo en absoluto. Si desea rastrear su paquete, haga clic en el enlace, si realmente lo desea sino no ya que no se lo esta pidiendo. `
		],
	},
	{
		imageURL: "./images/phish/05.png",
		answer: false,
		tips: [
			`La razón mas obvia por la que este email es un Phishing es el hecho de que se le pide que descargue e imprima una copia de la factura. Los emails de Phishing le pediran que descargue algo que incluira malware (programa malicioso). En general, las empresas legitimas rara vez piden que descargue cosas enviadas por email, ya que en la mayoría de los casos, puede acceder a los archivos que necesita el cibercriminal a traves de su cuenta en su plataforma. No ayuda que el archivo adjunto en sí se vea sombrío con nombres genericos y que sea un archivo .zip, que a menudo es otra señal de alerta. <br><br>
			A pesar de que el remitente parezca provenir de un dominio legítimo de Fedex, esto todavía parece algo sospechoso ya que un mensaje como este generalmente no proviene de un empleado al azar. Podría ser que el empleado esté intentando Phishing a las personas o que hayan sido pirateadas, o podría ser el resultado de una suplantacion de identidad, lo cual es bastante raro, especialmente para grandes empresas como Fedex con buenas medidas de seguridad. <br><br>
			Sin embargo, las conclusiones y señales más importantes son que se le pide que descargue un archivo .zip y el mensaje realmente no corresponde a los procedimientos de Fedex, ya que nunca se le pide que descargue un archivo .zip solo para imprimir un recibo y llevarlo a su oficina cuando el archivo fue enviado por email. Entonces antes de actuar piense si este email realmente representa lo que el remitente hubiese querido que hiciera.`
		],
	},
	{
		imageURL: "./images/legit/05.png",
		answer: true,
		tips: [
			`A primera vista esto parece un Phishing. Sin embargo hay bastantes empresas que mandan este tipo de marketing por emails.<br><br>
			El email del remitente no parece sospechoso. Sin embargo, es muy posible que un Phisher cree un dominio falso como este con fines de Phishing. Una buena idea es investigar a la empresa antes de continuar con cualquier accion. <br><br>
			Una forma común de asegurarse es verificar la dirección del hipervínculo para asegurarse de que está siendo enviado a un sitio legítimo. En este caso, se le redirige a un subdominio del sitio web oficial de Cheapflights que pertenece a una empresa legítima.`
		],
	},
];
export default data;