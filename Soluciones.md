- Layout
- Cards
- Formularios (Alta y Contacto)
- Nosotros

Problema: Hay demasiados divs o contenedores sin usar
Solucion: Usar <></>

Problema: Hay que maquetar un Layout
Solución: Prop "children", y props propias para otros atributos

Problema: Necesito cargar los cards de la API
Solución: useEffect para cargar datos de una fuente externa. Crear un componente lista y otro item. Ubicar el useEffect en lista, ya que renderiza a item.

Problema: Codificar Nosotros
Solucion: Usar JSX

Problema: Necesito codificar validaciones de formularios
Solución: Usar Context. 1) Necesitas un contexto de formulario (createContext), 2) un componente de formulario (Provider) y 3) un componente de campo de entrada (useContext).
