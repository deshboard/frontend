<?php

declare(strict_types=1);

namespace Deshboard\Infrastructure\Http\Exception;

use Deshboard\Infrastructure\Http\Exception;

final class NotFoundException extends \Exception implements Exception
{
    public function getStatusCode(): int
    {
        return 404;
    }
}
