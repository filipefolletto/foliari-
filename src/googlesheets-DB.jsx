import React, { useState, useEffect } from 'react';

function PlanilhaDados() {
  // Estado para armazenar os dados da planilha
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const API_KEY = 'AIzaSyCHnC6WOLnhw7nXFtzUilC-SIeMb7BDXeY';
        const SPREADSHEET_ID = '1RqdLOaIB9RN5oELAI8MbeKndXgcXkc6DabqLWaxB2dg';
        const RANGE = 'Sheet1!B2:G17';  
        

      const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

      try {
        const response = await fetch(URL);
        const result = await response.json();

        // Armazena os dados no estado
        setDados(result.values);
        setLoading(false);  // Atualiza o estado para indicar que os dados foram carregados
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);  // Atualiza o estado mesmo em caso de erro
      }
    };

    fetchData();
  }, []);  // O array vazio [] garante que o fetch seja executado uma única vez

  // Renderiza o conteúdo enquanto carrega
  if (loading) {
    return <div>Carregando dados...</div>;
  }

  return (


    
    <div>
      <h1>Dados da Planilha</h1>
      <table>
        <thead>
          <tr>
            {dados[0]?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanilhaDados;