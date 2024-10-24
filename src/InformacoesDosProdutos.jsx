//_________________________________________________TERMINAR DEPOIS__________________________________________________________ 




import React, { useState, useEffect } from 'react';


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

 




export const InformacoesDosProdutos = [
    {
      id: 1,
      name: 'Produto 1',
      price: 50,
      description: 'Descrição completa do Produto 1',
      image: '/path-to-image/product1.jpg',  // Imagem para o card
      stock: 10,
      category: 'Categoria 1'
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 100,
      description: 'Descrição completa do Produto 2',
      image: '/path-to-image/product2.jpg',
      stock: 5,
      category: 'Categoria 2'
    },
    // Adicione outros produtos...
  ];