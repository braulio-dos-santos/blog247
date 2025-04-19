<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$mysqli = new mysqli("localhost", "root", "", "aprendendo_angular");

if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode(["error" => "Falha ao conectar ao MySQL: " . $mysqli->connect_error]);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true);
$id = $_GET['id'] ?? null;
$query = $_GET['q'] ?? null;

switch ($method) {
    case "GET":
        if ($id) {
            $result = $mysqli->query("SELECT * FROM artigo WHERE id=$id");
            echo json_encode($result->fetch_assoc());
        } elseif ($query) {
            $query = $mysqli->real_escape_string($query);
            $result = $mysqli->query("SELECT * FROM artigo WHERE titulo LIKE '%$query%' OR conteudo LIKE '%$query%'");
            $artigo = [];
            while ($row = $result->fetch_assoc()) {
                $artigo[] = $row;
            }
            echo json_encode($artigo);
        } else {
            $result = $mysqli->query("SELECT * FROM artigo");
            $artigo = [];
            while ($row = $result->fetch_assoc()) {
                $artigo[] = $row;
            }
            echo json_encode($artigo);
        }
        break;

    case "POST":
        $titulo = $mysqli->real_escape_string($input["titulo"]);
        $conteudo = $mysqli->real_escape_string($input["conteudo"]);
        $mysqli->query("INSERT INTO artigo (titulo, conteudo) VALUES ('$titulo', '$conteudo')");
        echo json_encode(["message" => "Artigo criado com sucesso"]);
        break;

    case "PUT":
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID é obrigatório para atualização"]);
            exit();
        }
        $titulo = $mysqli->real_escape_string($input["titulo"]);
        $conteudo = $mysqli->real_escape_string($input["conteudo"]);
        $mysqli->query("UPDATE artigo SET titulo='$titulo', conteudo='$conteudo' WHERE id=$id");
        echo json_encode(["message" => "Artigo atualizado com sucesso"]);
        break;

    case "DELETE":
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID é obrigatório para exclusão"]);
            exit();
        }
        $mysqli->query("DELETE FROM artigo WHERE id=$id");
        echo json_encode(["message" => "Artigo excluído com sucesso"]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método não permitido"]);
        break;
}
?>
