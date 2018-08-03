<?php

declare(strict_types=1);

namespace Deshboard\Infrastructure\Http;

interface Exception
{
    public function getStatusCode(): int;
}
