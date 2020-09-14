/*
 * JDK: OpenJDK 14.0.2
 *
 * $ jenv local zulu64-14.0.2
 *
 * $ java -version
 * openjdk version "14.0.2" 2020-07-14
 * OpenJDK Runtime Environment Zulu14.29+23-CA (build 14.0.2+12)
 * OpenJDK 64-Bit Server VM Zulu14.29+23-CA (build 14.0.2+12, mixed mode, sharing)
 */

package com.distrib;

public class DistributedFileModifierDaemon {

    public static void main(String[] args) throws InterruptedException {

        Runnable task =
                () -> {
                    String threadName = Thread.currentThread().getName();
                    System.out.println("Hello " + threadName);
                    final Object obj = new Object();
                };

        task.run();

        Thread thread = new Thread(task);
        thread.start();

        System.out.println("Done!");
    }
}
