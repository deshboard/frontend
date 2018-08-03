<?php

namespace Tests\Deshboard\Infrastructure\Http\Exception;

use Deshboard\Infrastructure\Http\Exception;
use Deshboard\Infrastructure\Http\Exception\NotFoundException;
use PHPUnit\Framework\TestCase;

final class NotFoundExceptionTest extends TestCase
{
    /**
     * @test
     */
    public function it_is_an_http_exception()
    {
        $exception = new NotFoundException();

        $this->assertInstanceOf(Exception::class, $exception);
    }

    /**
     * @test
     */
    public function it_has_a_404_status_code()
    {
        $exception = new NotFoundException();

        $this->assertEquals(404, $exception->getStatusCode());
    }
}
