import re
import json

# Nome do arquivo de texto
arquivo_entrada = "src/json/wcag/text.txt"
arquivo_saida = "src/json/wcag/topicos_2.json"

# Ler o conteúdo do arquivo
with open(arquivo_entrada, "r", encoding="utf-8") as f:
    texto = f.read()

# Remover linhas que contêm "acessar Critério de Sucesso"
texto = re.sub(r"acessar Critério de Sucesso.*?\n", "", texto)

# Expressão regular para separar os tópicos
padrao = r"(\d+\.\d+\.\d+ - .+? \[.+?\])\n\n(.+?)(?=\n\n\d+\.\d+\.\d+ -|\Z)"
topicos = re.findall(padrao, texto, re.DOTALL)

# Estruturar os dados
dados = []
for titulo, conteudo in topicos:
    # Extração de palavras-chave
    palavras_chave_match = re.search(r"palavras-chave: (.+)", conteudo)
    palavras_chave = [kw.strip() for kw in palavras_chave_match.group(1).split(",")] if palavras_chave_match else []

    # Remover as palavras-chave do conteúdo
    conteudo_sem_palavras_chave = re.sub(r"palavras-chave: .+", "", conteudo).strip()

    # Adicionar ao JSON
    dados.append({
        "titulo": titulo.strip(),
        "conteudo": conteudo_sem_palavras_chave.strip(),
        "palavras_chave": palavras_chave
    })

# Exportar para JSON
with open(arquivo_saida, "w", encoding="utf-8") as f:
    json.dump(dados, f, ensure_ascii=False, indent=4)

print(f"Dados exportados para {arquivo_saida}")