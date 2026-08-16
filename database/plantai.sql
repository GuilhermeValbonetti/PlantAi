-- ==========================================
-- PLANTAI
-- Script de criação do banco de dados
-- PostgreSQL
-- ==========================================

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);
CREATE TABLE consulta (id SERIAL PRIMARY KEY, 
foto VARCHAR(200),
nome_planta VARCHAR(100),
analise VARCHAR(500),
grau VARCHAR(30),
doenca VARCHAR(50),
probabilidade INT,
data TIMESTAMP,
id_usuario SERIAL REFERENCES usuario(id))