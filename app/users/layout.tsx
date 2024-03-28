// Esse LayoutRouter.tsx dentro da pasta users foir criado para configurar apenas o arquivo pages.tsx da users.
// foi criado como exmplo para mostrar a página rota 2


  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (      
          <div 
          className="bg-slate-600 py-10">
            {children}
        </div>                    
      
    );
  }
  