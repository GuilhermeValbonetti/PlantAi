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